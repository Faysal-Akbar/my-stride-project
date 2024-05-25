const Banner = () => {
  const myStyle = {
    backgroundImage:
        "url('https://img.freepik.com/free-photo/gym-composition-with-sport-elements_23-2147915636.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716595200&semt=ais_user')",
};
    return (
        <div className="hero min-h-[450px] mb-3" style={myStyle}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Welcome to My Shop</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Explore</button>
    </div>
  </div>
</div>
    );
};

export default Banner;