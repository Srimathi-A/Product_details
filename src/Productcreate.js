import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductCreate = () => {
    const [id,setId]=useState()
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [price,setPrice]=useState()
    const [active,setActive]=useState(true)
    const navigate=useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const empdata={name,price,description,active}
        fetch("http://localhost:8000/employee",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
        })
        .then((res)=>{
        alert("Saved Successfully")
        navigate('/')
        })
        .catch((err)=>console.log(err.message))
        
    }

    return (
        <div>
            <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='container' onSubmit={handleSubmit}>
                        <div className='card' style={{"textAlign":"left"}}>
                            <div className='card-title'>                               
                               <center><h2>Product Create</h2></center>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>ID</label>
                                            <input className='form-control' disabled="disabled" value={id}/>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Name</label>
                                            <input className='form-control' value={name} onChange={e=>setName(e.target.value)} required/>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Description</label>
                                            <input className='form-control' value={description} onChange={e=>setEmail(e.target.value)} required/>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Price</label>
                                            <input className='form-control' value={price} onChange={e=>setPhone(e.target.value)} required/>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' onChange={e=>setActive(e.target.checked)} defaultChecked/>
                                            <label className='form-check-label'>isActive</label>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <button className='btn btn-success' type='submit'>Save</button>
                                            {/* <button className='btn btn-danger'>Back</button> */}
                                            <Link to='/' className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductCreate;
