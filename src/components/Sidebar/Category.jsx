import React from "react";

const categories = [
    "All", "Sneakers", "Flats", "Sandals", "Heels"
]
function Category() {
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h3 className="fs-4 fw-normal">Category</h3>
            <div className="form-group">
                {
                    categories.map((cat,index) => (
                        <div key={cat} className="form-check py-1">
                            <input className="form-check-input" type="radio" name="category"
                                id={`cat_${index}`}
                                value={cat}
                                defaultChecked={cat === 'All'}
                            />
                            <label 
                                htmlFor={`cat_${index}`}
                                role="button"
                                className={`form-check-label ${cat === 'All' ? 'text-decoration-underline fw-bolder' : ''}`}
                            >
                                {cat}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category;