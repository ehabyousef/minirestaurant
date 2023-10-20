import React from 'react';
import style from './Header.module.css'
const Header = ({ filterbyCategory, allcateg }) => {
    //to filter by category

    const onFilter = (cat) => {
        filterbyCategory(cat)
    }
    return (
        <>
            <div className="container my-3">
                <div className="row d-flex justify-content-center align-items-center p-4">
                    <div className="col-8 d-flex flex-column justify-content-center align-items-center">
                        <div className="head border-bottom border-3 border-danger mb-4 p-2 fs-2 fw-bolder text-success ">
                            <p>قائمة الطعام</p>
                        </div>
                        <div className="d-flex gap-4 ">
                            {
                                allcateg.length >= 1 ? allcateg.map((x) => {
                                    return (
                                        <div className="my-3">
                                            <button onClick={() => onFilter(x)} id={style.btnn} className="btn btn-outline-danger">{x}</button>
                                        </div>
                                    )
                                }) : <h2>مفيششششششششششششششششششش</h2>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;