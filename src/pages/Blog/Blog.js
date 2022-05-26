import React from 'react';
// import Footer from '../../Shared/Footer/Footer';

const Blog = () => {
  return (
    <div>
      <h1 className='text-center text-2xl text-slate-800 m-3 font-bold'>
        All BLOGS
      </h1>
      <div className='border p-5 m-5 rounded shadow'>
        <h2 className='text-2xl'>
          How will you improve the performance of a React Application?
        </h2>
        <div>
          <span className='font-bold'>
            improve the performance of a React Application show in list
          </span>
          <p>* Using Stateless Components and React.PureComponent </p>
          <br />
          <p>* Dependency optimization use in React</p>
          <br />
          <p>* Using dynamic import when Code-splitting</p>
          <br />
          <p>* At loading time using lazy loading state</p>
          <br />
          <p>
            * Implementing componentupdate for preventing unnecessary renders
          </p>
        </div>
      </div>
      <div className='border p-5 m-5 rounded shadow'>
        <h2 className='text-2xl'>
          What are the different ways to manage a state in a React application?
        </h2>
        <div>
          <span className='font-bold'>
            There are five main types of state manage in React apps
          </span>

          <p>
            <span>Server state</span>
            is a simple concept, but can be hard to manage all side of our local
            and global UI state.
          </p>
          <p>
            <span>Global state</span>
            is necessary when we want to get and update data anywhere in our
            app, or in multiple components at least.
          </p>
          <p>
            <span>Local State</span>
            is data manage in one or another component.Local state is most often
            managed in React using the useState hook.
          </p>
          <p>
            <span> URL state</span>
            is often missing as a category of state, but it is an important
            one.In many cases, a lot of major parts of our application rely upon
            accessing URL state.
          </p>
        </div>
      </div>
      <div className='border p-5 m-5 rounded shadow'>
        <h2 className='text-2xl'>How does prototypical inheritance work?</h2>
        <p>
          <span className='font-bold'> JavaScript objects</span> have a link to
          a prototype object. It is an object can inherit the properties and
          methods of another object method. Traditionally, in order to get and
          set an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
        </p>
      </div>
      <div className='border p-5 m-5 rounded shadow'>
        <h2 className='text-2xl'>
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h2>
        <p>
          You can't called state directly ,calling the callback state.Because
          you can't directly update the initial value.example,const [products,
          setProducts] = useState([]). there products is a initial value,you
          can't update a intial value so we set a function as like as
          setProducts.
        </p>
      </div>
      <div className='border p-5 m-5 rounded shadow'>
        <h2 className='text-2xl'>
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h2>
        <p>
          If I have an array of products. Find the product name i use,Filter
          method. Look like that,products.fliter method use then get every
          product.We show product.name.
        </p>
      </div>
    </div>
  );
};

export default Blog;
