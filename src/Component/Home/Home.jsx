import style from './Home.module.css';

const Home = ({ itemData }) => {

    return (
        <>
            <div className="container">
                {itemData.length >= 1 ? itemData.map((x) => {
                    return (
                        <div class="row row-cols-1 g-4">
                            <div class="col">
                                <div class="card d-flex flex-md-row flex-sm-column position-relative">
                                    <img id={style.imag} src={x.imgUrl} class="card-img-top " alt="..." />
                                    <div className="position-absolute start-0 top-0 m-2 fs-5 p-2 text-danger">{x.price}</div>
                                    <div class="card-body">
                                        <h5 class="card-title py-2 me-2">{x.title}</h5>
                                        <p class="card-text py-2 me-3">{x.dascription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) : <h2>لا يوجد اصناف اليوم تعالى بكره</h2>}
            </div>
        </>
    );
};

export default Home;