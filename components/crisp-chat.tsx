'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('5235f39c-06b7-41fb-9b22-d4dc2e5ca2cb');
  }, []);

  return null
};
