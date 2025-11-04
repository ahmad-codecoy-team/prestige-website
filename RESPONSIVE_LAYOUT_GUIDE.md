# Responsive Layout Implementation Guide

## Overview
This project uses a **dual-layout strategy** where mobile/tablet screens maintain their original design while desktop screens (≥1024px) use a completely different layout with a fixed sidebar and custom headers.

---

## Architecture

### Layout Hierarchy
```
MainLayout (Root Layout for Protected Routes)
  ├── DesktopSidebar (Fixed, 80px, White BG) - Desktop Only
  └── Content Area
      └── Page Components (Home, Settings, Chat, etc.)
          ├── Mobile Header - Mobile/Tablet Only
          ├── Desktop Header - Desktop Only
          └── Page Content
```

---

## Key Implementation Strategy

### Why We Use CSS Modules Instead of Tailwind Responsive Classes

**Problem:** Tailwind's responsive classes (`hidden lg:flex`, `lg:block`) were not working reliably in this project setup.

**Solution:** We use **CSS Modules with standard media queries** for responsive behavior:

```css
/* Component is hidden by default */
.sidebar {
  display: none;
}

/* Shows only on desktop (≥1024px) */
@media (min-width: 1024px) {
  .sidebar {
    display: flex;
    /* ...other styles */
  }
}
```

This approach is **100% reliable** because it uses native CSS media queries that work in all browsers regardless of framework configuration.

---

## Core Components

### 1. MainLayout (`src/layouts/MainLayout.tsx`)

**Purpose:** Root layout for all protected routes. Renders sidebar and content area.

**Structure:**
```tsx
<div className="min-h-screen bg-[#FCC40B]">
  <DesktopSidebar />  {/* Fixed sidebar on desktop */}
  <div className={styles.contentArea}>  {/* Margin-left: 80px on desktop */}
    <div className={styles.contentWrapper}>  {/* Full width, yellow bg */}
      <Outlet />  {/* Renders child routes */}
    </div>
  </div>
</div>
```

**CSS Module (`MainLayout.module.css`):**
```css
.contentArea {
  min-height: 100vh;
}

@media (min-width: 1024px) {
  .contentArea {
    margin-left: 80px;  /* Space for fixed sidebar */
  }
}

.contentWrapper {
  min-height: 100vh;
  background-color: #FCC40B;
  width: 100%;
}
```

---

### 2. DesktopSidebar (`src/layouts/sidebar/DesktopSidebar.tsx`)

**Purpose:** Fixed navigation sidebar for desktop screens only.

**Features:**
- Logo at top
- 4 navigation icons: Home, Chat, Notifications, Settings
- Active state highlighting (yellow background)
- Fixed position on left side

**CSS Module (`DesktopSidebar.module.css`):**
```css
.sidebar {
  display: none;  /* Hidden on mobile/tablet */
}

@media (min-width: 1024px) {
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 80px;
    background-color: white;
    border-right: 1px solid #e5e7eb;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 50;
  }
}
```

**Mobile/Tablet:** Completely hidden. Uses drawer sidebar instead (opened with menu button).

**Desktop:** Always visible, fixed on left side.

---

### 3. DesktopHeader (`src/components/layout/DesktopHeader.tsx`)

**Purpose:** Reusable header component for desktop screens with title, profile, and optional tabs.

**Structure:**
```tsx
<header className={styles.header}>
  <div className="px-4 py-4">
    {/* Top row: Title and Profile */}
    <div className="flex items-center justify-between">
      <h1>{title}</h1>
      <img src="profile" />  {/* User profile picture */}
    </div>
    
    {/* Tabs or additional content */}
    {children}
  </div>
</header>
```

**CSS Module (`DesktopHeader.module.css`):**
```css
.header {
  display: none;  /* Hidden on mobile/tablet */
}

@media (min-width: 1024px) {
  .header {
    display: block;
    background-color: #FCC40B;
    position: sticky;
    top: 0;
    z-index: 40;
  }
}
```

**Mobile/Tablet:** Hidden. Each page uses its own mobile header (usually black with menu button).

**Desktop:** Visible with title, profile picture, and tabs.

---

### 4. PageLayout (`src/components/layout/PageLayout.tsx`)

**Purpose:** Wrapper for simple pages (Chat, Notifications, etc.) that need both mobile and desktop headers.

**Usage:**
```tsx
<PageLayout title="Notifications">
  {/* Page content */}
</PageLayout>
```

**What it does:**
- Renders mobile header with back button (mobile/tablet only)
- Renders DesktopHeader (desktop only)
- Wraps content with proper spacing

---

### 5. SettingsLayout (`src/pages/settings/SettingsLayout.tsx`)

**Purpose:** Special layout wrapper for all settings pages with tabbed navigation.

**Features:**
- Mobile: Back button + title
- Desktop: Title, profile picture, and horizontal tabs for all settings pages
- Tabs: Profile, Security, History, Contact, Privacy, About

**Usage:**
```tsx
<SettingsLayout title="Edit Profile">
  {/* Settings page content */}
</SettingsLayout>
```

---

## Routing Structure (Professional Nested Routing)

### Home Page Routes
```tsx
<Route path="/home" element={<Home />}>
  <Route index element={<AvailableShifts />} />
  <Route path="bid" element={<AvailableShifts />} />
  <Route path="schedule" element={<ScheduledShifts />} />
  <Route path="invoice" element={<CompletedShifts />} />
</Route>
```

**How it works:**
1. Home component renders headers and tabs
2. `<Outlet />` renders the nested route component (AvailableShifts, etc.)
3. Tab clicks navigate to different routes (`/home/bid`, `/home/schedule`, etc.)
4. React Router handles the routing automatically

**Benefits:**
- ✅ Browser back/forward buttons work
- ✅ Each tab has its own URL
- ✅ Can bookmark specific tabs
- ✅ Professional standard used by major websites

---

## Screen Size Breakpoints

### Mobile/Tablet: `< 1024px`
- Mobile sidebar drawer (opened with menu button)
- Mobile headers (usually black with menu, logo, icons)
- Full-width content
- Original design preserved exactly

### Desktop: `≥ 1024px`
- Fixed white sidebar (80px) on left
- Desktop headers (yellow with title, profile, tabs)
- Content area with left margin (80px) for sidebar
- Full-width content (no max-width constraint)
- Consistent padding (16px) on all sides

---

## Responsive Behavior Rules

### 1. **Never use Tailwind responsive classes for layout visibility**
❌ Don't use: `hidden lg:flex`, `lg:block`, `lg:ml-20`
✅ Use: CSS Modules with `@media (min-width: 1024px)`

### 2. **Each page component should have TWO headers**
```tsx
{/* Mobile Header - visible on mobile/tablet */}
<header className="lg:hidden">
  {/* Mobile header content */}
</header>

{/* Desktop Header - visible on desktop */}
<DesktopHeader title="Page Title">
  {/* Tabs or additional content */}
</DesktopHeader>
```

### 3. **Mobile design is NEVER modified**
- All mobile/tablet UI remains exactly as originally designed
- Only desktop (≥1024px) gets new layout
- Use `lg:hidden` class (this one works) to hide mobile elements on desktop

### 4. **Consistent padding across pages**
- Header padding: `px-4 py-4` (16px)
- Content padding: `px-4 py-4` or `px-4 py-5` (16px horizontal)
- This creates consistent spacing throughout the app

---

## File Structure

```
src/
├── layouts/
│   ├── MainLayout.tsx              # Root layout with sidebar
│   ├── MainLayout.module.css       # Responsive layout styles
│   ├── sidebar/
│   │   ├── DesktopSidebar.tsx      # Fixed desktop sidebar
│   │   ├── DesktopSidebar.module.css
│   │   └── index.tsx               # Mobile drawer sidebar
│
├── components/
│   └── layout/
│       ├── DesktopHeader.tsx       # Reusable desktop header
│       ├── DesktopHeader.module.css
│       └── PageLayout.tsx          # Simple page wrapper
│
├── pages/
│   ├── home/
│   │   └── index.tsx               # Home with nested routes
│   ├── settings/
│   │   ├── SettingsLayout.tsx      # Settings wrapper with tabs
│   │   ├── EditProfile.tsx
│   │   ├── WorkHistory.tsx
│   │   └── ...
│   ├── chat/
│   ├── notifications/
│   └── ...
│
└── routes/
    └── AppRoutes.tsx               # All route definitions
```

---

## Common Patterns

### Pattern 1: Page with Simple Header
```tsx
function MyPage() {
  return (
    <PageLayout title="My Page">
      {/* Content */}
    </PageLayout>
  );
}
```

### Pattern 2: Page with Tabs (like Home)
```tsx
function MyPage() {
  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden">
        {/* Mobile header with menu, logo, etc. */}
      </header>

      {/* Desktop Header */}
      <DesktopHeader title="My Page">
        {/* Tabs */}
        <div className="flex gap-8 pt-4 pb-3 border-b border-black/10">
          {/* Tab buttons */}
        </div>
      </DesktopHeader>

      {/* Content */}
      <main>
        <div className="px-4 py-4 lg:px-4 lg:py-5">
          <Outlet />  {/* For nested routes */}
        </div>
      </main>
    </>
  );
}
```

### Pattern 3: Settings Pages
```tsx
function MySettingsPage() {
  return (
    <SettingsLayout title="My Settings">
      {/* Settings content */}
    </SettingsLayout>
  );
}
```

---

## Troubleshooting

### Issue: Sidebar not showing on desktop
**Check:**
1. Browser width is ≥1024px
2. CSS module is imported correctly
3. Hard refresh browser (Ctrl+Shift+R)

### Issue: Both mobile and desktop headers showing
**Check:**
1. Mobile header has `lg:hidden` class
2. DesktopHeader uses CSS module with media query

### Issue: Content has too much side padding
**Check:**
1. MainLayout.module.css doesn't have max-width constraint
2. Content padding is consistent (px-4)
3. No extra wrapper divs adding padding

---

## Best Practices

1. **Always test both mobile and desktop** after making changes
2. **Use CSS modules for responsive visibility** (display: none/block)
3. **Keep mobile design untouched** - only add desktop layouts
4. **Maintain consistent padding** across all pages (16px)
5. **Use nested routing** for professional URL structure
6. **One separator per header** - only under the bottom section (tabs)

---

## Summary

This implementation provides a **clean separation** between mobile and desktop layouts:

- **Mobile/Tablet:** Original design, drawer sidebar, mobile headers
- **Desktop:** Fixed sidebar, custom headers with tabs, full-width content
- **Method:** CSS Modules with media queries (not Tailwind responsive classes)
- **Result:** Professional, maintainable, and fully responsive application

When working with AI assistants on this project, share this guide so they understand the architecture and don't accidentally break the responsive behavior by using Tailwind responsive classes or modifying the mobile design.
