Two types of rendering
    1. static generation
        called from inside the component
        export async function getStaticProps(context){...}
        Code inside this method will not be exposed to the client side, so db credentials and so on can be used inside this
    2. File based routing
        [id].js
        [...slug].js
        

