type TCountProps = {
  count?: number;
};

function Count({ count }: TCountProps): JSX.Element {
  return <p>{count}</p>;
}

export default Count;
