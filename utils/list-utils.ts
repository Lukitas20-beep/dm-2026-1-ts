type SectionListData = {
  title: string;
  data: string[];
};

export const transformListToSectionList = (
  data: string[],
): SectionListData[] => {
  const transformedDataMap: Record<string, string[]> = {};
  data.forEach((name) => {
    const firstLetter = name[0];
    if (!transformedDataMap[firstLetter]) {
      transformedDataMap[firstLetter] = [];
    }
    transformedDataMap[firstLetter].push(name);
  });

  const transformedData = Object.keys(transformedDataMap).map((firstLetter) => {
    return {
      title: firstLetter,
      data: transformedDataMap[firstLetter],
    };
  });

  return transformedData;
};
