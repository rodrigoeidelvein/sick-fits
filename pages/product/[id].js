import SingleProduct from "../../components/SingleProduct";
import { useRouter } from "next/router";

const SingleProductPage = ({ query }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <SingleProduct id={id} />
    </div>
  );
};

export default SingleProductPage;
