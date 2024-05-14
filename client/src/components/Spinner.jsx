import BounceLoader from "react-spinners/BounceLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

/* eslint-disable react/prop-types */
const Spinner = ({ loading }) => {
  return (
    <BounceLoader
      color="#4438CA"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
