// src/components/attendance/ClockModal.tsx
import * as React from "react";
import moment, { Moment } from "moment";

// MUI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

// MUI X
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import { TimeField } from "@mui/x-date-pickers/TimeField";

// Icons (you already have lucide-react)
import { Keyboard, Clock3 } from "lucide-react";

export interface ClockModalProps {
  open: boolean;
  initialValue?: Moment | null;
  onCancel?: () => void;
  onConfirm: (value: Moment) => void;
  title?: string;          // e.g. "Enter time" / "Select time"
  use24h?: boolean;        // default true (matches your UI)
  minutesStep?: number;    // default 1
}

const ClockModal: React.FC<ClockModalProps> = ({
  open,
  initialValue = moment(),
  onCancel,
  onConfirm,
  title = "Enter time",
  use24h = true,
  minutesStep = 1,
}) => {
  const [value, setValue] = React.useState<Moment>(initialValue || moment());
  const [keyboardMode, setKeyboardMode] = React.useState(true); // start on keyboard like your first screenshot

  React.useEffect(() => {
    if (open) {
      setValue(initialValue || moment());
      setKeyboardMode(true);
    }
  }, [open, initialValue]);

  const hourFmt = use24h ? "HH" : "hh";

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Dialog
        open={open}
        onClose={onCancel}
        PaperProps={{
          sx: {
            borderRadius: 4,
            width: 460,
            maxWidth: "95vw",
          },
        }}
      >
        <DialogTitle sx={{ pb: 0.5 }}>
          <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
            {title}
          </Typography>
        </DialogTitle>

        <DialogContent sx={{ pt: 1 }}>
          {/* Big numeric header */}
          <Stack direction="row" justifyContent="center" alignItems="baseline" spacing={2} sx={{ mb: 1 }}>
            <Typography variant="h2" sx={{ fontWeight: 700, lineHeight: 1 }}>
              {value.format(hourFmt)}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, lineHeight: 1 }}>
              :
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, lineHeight: 1 }}>
              {value.format("mm")}
            </Typography>
          </Stack>

          {/* Labels under header */}
          <Stack direction="row" justifyContent="space-between" sx={{ px: 6, mb: 1 }}>
            <Typography variant="caption" color="text.secondary">Hour</Typography>
            <Typography variant="caption" color="text.secondary">Minute</Typography>
          </Stack>

          {/* Mode content */}
          {keyboardMode ?  (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <TimeClock
                value={value}
                onChange={(nv) => nv && setValue(nv as Moment)}
                ampm={!use24h}
                minutesStep={minutesStep}
                sx={{ "--mui-pickers-clock-size": "280px" }}
              />
            </Box>
          ):(
            <Box sx={{ maxWidth: 320, mx: "auto", mt: 1 }}>
              <TimeField
                value={value}
                onChange={(nv) => nv && setValue(nv as Moment)}
                format={use24h ? "HH:mm" : "hh:mm a"}
                minutesStep={minutesStep}
                ampm={!use24h}
                fullWidth
              />
            </Box>
          ) }

          <Divider sx={{ my: 1.5 }} />

          {/* Bottom row: toggle on left, actions on right */}
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Tooltip title={keyboardMode ? "Switch to clock" : "Switch to keyboard"}>
              <IconButton
                onClick={() => setKeyboardMode((v) => !v)}
                aria-label="Toggle input mode"
                size="large"
              >
                {keyboardMode ? <Clock3 /> : <Keyboard />}
              </IconButton>
            </Tooltip>

            <Stack direction="row" gap={1.5} sx={{ pr: 1 }}>
              <Button variant="text" onClick={onCancel}>Cancel</Button>
              <Button
                variant="contained"
                disableElevation
                onClick={() => onConfirm(value || moment())}
              >
                OK
              </Button>
            </Stack>
          </Stack>
        </DialogContent>

        <DialogActions sx={{ display: "none" }} />
      </Dialog>
    </LocalizationProvider>
  );
};

export default ClockModal;
