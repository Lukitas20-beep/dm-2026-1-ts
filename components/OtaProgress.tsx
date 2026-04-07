import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { DarkTheme, LightTheme } from '@/constants/theme';

const TOTAL_STEPS = 5;
const STEP_INTERVAL_MS = 2500;

type OtaProgressProps = {
  isDark: boolean;
};

export function OtaProgress({ isDark }: OtaProgressProps) {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const theme = isDark ? DarkTheme : LightTheme;

  useEffect(() => {
    if (done) return;

    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev >= TOTAL_STEPS) {
          return prev;
        }
        return prev + 1;
      });
    }, STEP_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [done]);

  useEffect(() => {
    if (step >= TOTAL_STEPS) {
      setDone(true);
    }
  }, [step]);

  return (
    <View style={styles.container}>
      {done ? (
        <Text style={[styles.doneText, { color: theme.success }]}>Atualizações concluídas!</Text>
      ) : (
        <>
          <ActivityIndicator size="small" color={theme.accent} />
          <Text style={[styles.progressText, { color: theme.textTertiary }]}>
            Aplicando atualizações OTA... ({step}/{TOTAL_STEPS})
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 10,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '500',
  },
  doneText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
