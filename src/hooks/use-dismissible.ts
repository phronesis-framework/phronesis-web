"use client";

import * as React from "react";

interface UseDismissibleOptions {
  datasetKey?: string;
}

export function useDismissible(storageKey: string, options: UseDismissibleOptions = {}) {
  const { datasetKey } = options;
  const [dismissed, setDismissed] = React.useState<boolean>(false);

  const dismiss = React.useCallback(() => {
    setDismissed(true);
    try {
      window.localStorage.setItem(storageKey, "true");
      if (datasetKey) {
        document.documentElement.dataset[datasetKey] = "true";
      }
    } catch {}
  }, [storageKey, datasetKey]);

  return { dismissed, dismiss };
}
