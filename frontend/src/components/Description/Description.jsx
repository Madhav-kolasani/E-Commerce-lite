import "./Description.css";

const Description = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionobox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionobox-description">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and global reach.
        </p>

        <p>
          E-commerce websites typically display products or services with
          detailed descriptions, images, prices, and available variations (such
          as sizes or colors). Each product usually has its own dedicated page
          with relevant information, helping customers make informed purchasing
          decisions.
        </p>
      </div>
    </div>
  );
};

export default Description;
