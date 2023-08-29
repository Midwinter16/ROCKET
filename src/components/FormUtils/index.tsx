const PlainText = (props: {
  value?: any;
  format?: (v: any) => React.ReactNode;
}) => {
  const { format, value } = props;
  return <span>{format ? format(value) : value}</span>;
};

export default PlainText;
