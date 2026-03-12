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
import { NEWS_LIST } from '@/data/news';

const LIGHT = {
  background: '#F8FAFC',
  header: '#FFFFFF',
  headerBorder: '#E2E8F0',
  card: '#FFFFFF',
  titleText: '#0F172A',
  footerBackground: '#F1F5F9',
  footerBorder: '#CBD5E1',
  switchTrackFalse: '#CBD5E1',
  switchTrackTrue: '#3B82F6',
  switchThumb: '#FFFFFF',
};

const DARK = {
  background: '#0F172A',
  header: '#1E293B',
  headerBorder: '#334155',
  card: '#1E293B',
  titleText: '#F1F5F9',
  footerBackground: '#1E293B',
  footerBorder: '#334155',
  switchTrackFalse: '#475569',
  switchTrackTrue: '#2563EB',
  switchThumb: '#FFFFFF',
};

type UpdateScreenProps = {
  onBack: () => void;
};

export function UpdateScreen({ onBack }: UpdateScreenProps) {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? DARK : LIGHT;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: theme.header, borderBottomColor: theme.headerBorder },
        ]}
      >
        <View style={styles.headerLeft}>
          <ActivityIndicator size="small" color={isDark ? '#60A5FA' : '#3B82F6'} />
          <Text style={[styles.headerTitle, { color: theme.titleText }]}>
            Atualização em Andamento
          </Text>
        </View>
        <Switch
          trackColor={{ false: theme.switchTrackFalse, true: theme.switchTrackTrue }}
          thumbColor={theme.switchThumb}
          ios_backgroundColor={theme.switchTrackFalse}
          onValueChange={setIsDark}
          value={isDark}
        />
      </View>

      {/* News ScrollView */}
      <ScrollView
        style={[styles.scrollView, { backgroundColor: theme.card }]}
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
          { backgroundColor: theme.footerBackground, borderTopColor: theme.footerBorder },
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
