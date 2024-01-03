
//this is a not found meal error
//this is a server compoenents, which means,
//if db was searched and couldnt find the required data, then this will be thrown
//think everything as serverside and client side, it will be much better
const Notfound = () => {
    return (
        <div className='error'>
            <h1>Not Found the meal</h1>
        </div>
    );
};

export default Notfound;