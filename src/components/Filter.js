import React from 'react';

const Filter = (props) => {
    return (
        <div className='filter'>
            <div className='result'>
          the Number Products :    {props.count}
            </div> 
            <div className='sort'>
                <div className='sort-title'> Sort by</div>
                <div className='form-checkbox'>
                    <div className='form-group'>
                        <input type="radio" value="asc" name='radiofilter' onChange={props.sortProducts} />
                        <label htmlFor=''> Newest Products </label>

                    </div>
                    <div className='form-group'>
                        <input type="radio" value="desc" name='radiofilter' onChange={props.sortProducts} />
                        <label htmlFor=''> Oldest Products </label>

                    </div>

                </div>


            </div>
            <div className='brand'>
                Brans
                <select value={props.brand}  onChange={props.filterProducts} >
                    <option value=""> All </option>
                    <option value="samsung">Samsung</option>
                    <option value="iphone">Iphone</option>
                    <option value="motorola">Motorola</option>
                    <option value="sony">Sony</option>
                    <option value="lg">LG</option>


                </select>


            </div>
            
        </div>
    );
}

export default Filter;
