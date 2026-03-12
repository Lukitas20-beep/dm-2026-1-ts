import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, View } from 'react-native';

import { type NewsItem } from '@/data/news';

type NewsItemProps = {
  item: NewsItem;
  isDark: boolean;
};

export function NewsItemCard({ item, isDark }: NewsItemProps) {
  const textColor = isDark ? '#F1F5F9' : '#1E293B';
  const subtextColor = isDark ? '#94A3B8' : '#64748B';
  const borderColor = isDark ? '#334155' : '#E2E8F0';
  const iconColor = isDark ? '#60A5FA' : '#3B82F6';

  return (
    <View style={[styles.container, { borderBottomColor: borderColor }]}>
      <View style={[styles.iconWrapper, { backgroundColor: isDark ? '#1E3A5F' : '#EFF6FF' }]}>
        <MaterialIcons name={item.icon as keyof typeof MaterialIcons.glyphMap} size={22} color={iconColor} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, { color: textColor }]} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={[styles.timestamp, { color: subtextColor }]}>{item.timestamp}</Text>
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
