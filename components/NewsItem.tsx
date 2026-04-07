import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, View } from 'react-native';

import { DarkTheme, LightTheme } from '@/constants/theme';
import { type NewsItem } from '@/data/news';

type NewsItemProps = {
  item: NewsItem;
  isDark: boolean;
};

export function NewsItemCard({ item, isDark }: NewsItemProps) {
  const theme = isDark ? DarkTheme : LightTheme;

  return (
    <View style={[styles.container, { borderBottomColor: theme.border }]}>
      <View style={[styles.iconWrapper, { backgroundColor: theme.accentBackground }]}>
        <MaterialIcons name={item.icon as keyof typeof MaterialIcons.glyphMap} size={22} color={theme.accent} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={[styles.timestamp, { color: theme.textSecondary }]}>{item.timestamp}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    gap: 12,
  },
  iconWrapper: {
    width: 42,
    height: 42,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
  },
  timestamp: {
    fontSize: 12,
  },
});
