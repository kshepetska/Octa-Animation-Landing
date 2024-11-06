import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogProps,
} from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useId, useState } from "react";

interface PageDialogProps extends DialogProps {
  children?: React.ReactNode;
}

export function PageDialog({
  children,
  onOpenChange,
  ...props
}: PageDialogProps) {
  const id = useId();
  const [isOpen, setIsOpen] = useState(props.open ?? false);

  useEffect(() => {
    setIsOpen(props.open ?? false);
  }, [props.open]);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (onOpenChange) onOpenChange(open);
      setIsOpen(open);
    },
    [onOpenChange]
  );

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleOpenChange(false);
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [handleOpenChange]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange} modal={false}>
      <AnimatePresence>
        {isOpen && (
          <DialogPortal forceMount>
            <DialogOverlay></DialogOverlay>
            <DialogContent
              onInteractOutside={(e) => e.preventDefault()}
              onEscapeKeyDown={(e) => e.preventDefault()}
              onPointerDownOutside={(e) => e.preventDefault()}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              forceMount
              asChild
            >
              <motion.div
                key={`dialog-${id}`}
                className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden z-20"
                initial={{ y: "100%", scale: 0.9, borderRadius: "1.75rem" }}
                animate={{
                  y: ["100%", "0%", "0%"],
                  scale: [0.9, 0.9, 1],
                  borderRadius: ["1.75rem", "1.75rem", "0"],
                }}
                exit={{
                  y: ["0%", "0%", "100%"],
                  scale: [1, 0.9, 0.9],
                  borderRadius: ["0", "1.75rem", "1.75rem"],
                }}
                transition={{ duration: 1 }}
                style={{
                  willChange: "transform, border-radius",
                  backgroundColor: "var(--page-dialog-bg)",
                  color: "var(--page-dialog-text)",
                }}
              >
                {children}
              </motion.div>
            </DialogContent>
          </DialogPortal>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
