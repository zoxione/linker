const LINK_STATUS_PRETTY = {
  ENABLE: "Включена",
  DISABLE: "Отключена",
};

const LINK_STATUS_VALUES = Object.keys(LINK_STATUS_PRETTY) as (keyof typeof LINK_STATUS_PRETTY)[];

const LINK_STATUS_OPTIONS = LINK_STATUS_VALUES.map((type) => ({
  label: LINK_STATUS_PRETTY[type],
  value: type,
}));

export { LINK_STATUS_OPTIONS, LINK_STATUS_PRETTY, LINK_STATUS_VALUES };
