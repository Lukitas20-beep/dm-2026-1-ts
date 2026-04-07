import { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NewsItemCard } from '@/components/NewsItem';
import { OtaProgress } from '@/components/OtaProgress';
import { DarkTheme, LightTheme, type Theme } from '@/constants/theme';
import { NEWS_LIST } from '@/data/news';

type UpdateScreenProps = {
  onBack: () => void;
};

export function UpdateScreen({ onBack }: UpdateScreenProps) {
  const [isDark, setIsDark] = useState(false);

  const theme: Theme = isDark ? DarkTheme : LightTheme;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: theme.surface, borderBottomColor: theme.border },
        ]}
      >
        <View style={styles.headerLeft}>
          <ActivityIndicator size="small" color={theme.accent} />
          <Text style={[styles.headerTitle, { color: theme.text }]}>
            Atualização em Andamento
          </Text>
        </View>
        <Switch
          trackColor={{ false: theme.switchTrackOff, true: theme.switchTrackOn }}
          thumbColor={theme.switchThumb}
          ios_backgroundColor={theme.switchTrackOff}
          onValueChange={setIsDark}
          value={isDark}
        />
      </View>

      {/* News ScrollView */}
      <ScrollView
        style={[styles.scrollView, { backgroundColor: theme.surface }]}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {NEWS_LIST.map((item) => (
          <NewsItemCard key={item.id} item={item} isDark={isDark} />
        ))}
      </ScrollView>

      {/* Footer with OTA progress and back button */}
      <View
        style={[
          styles.footer,
          { backgroundColor: theme.surfaceSecondary, borderTopColor: theme.borderSecondary },
        ]}
      >
        <OtaProgress isDark={isDark} />
        <Button title="Voltar" onPress={onBack} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    gap: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    flexShrink: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 8,
  },
  footer: {
    borderTopWidth: 1,
    paddingBottom: 12,
  },
});
