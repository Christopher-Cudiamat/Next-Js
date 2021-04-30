function UserIdProps(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdProps;

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;

  return {
    userId: `userId-${userId}`,
  };
}
