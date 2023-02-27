import React, { useEffect, useState } from 'react'
import '../style/information.css'
import { Card, Tag, Button } from 'antd'

const Information = ( props ) =>
{
    const [ selectedId, setSelectedId ] = useState()
    const [ selectedUser, setSelectedUser ] = useState( [] )
    const [ singleUser, setSingleUser ] = useState( [] )

    console.log( "information selectedId", selectedId )
    console.log( "information selectedUser", selectedUser )
    console.log( "information singleUser", singleUser )

    useEffect( () =>
    {
        setSelectedId( props.selectedId )
    }, [ props.selectedId ] )

    useEffect( () =>
    {
        if ( props.users.length > 0 )
        {
            let filteredUser = props.users.filter( ( el ) => el.id === props.selectedId )
            console.log( "filteredUser", filteredUser[ 0 ] )
            setSelectedUser( filteredUser[ 0 ] )
            setSingleUser( props.users[ 0 ] )
        }
    }, [ props.selectedId, props.users ] )


    const { Meta } = Card;
    return (

        <div className='right-sight'>
            <div className='img'></div>
            <div className='email'>
                <div className='email-text'>EMAİL</div>
                <div>
                    { selectedUser ? selectedUser.email : singleUser.email }
                </div>
            </div>
            <div className='phone'>
                <div className='email-text'>PHONE</div>
                <div>
                    { selectedUser ? selectedUser.phone : singleUser.phone }
                </div>
            </div>

            <div className='label'>
                <h4 className='email-text'>LABELS</h4>
                { <Tag className='tag'>{ ( selectedUser && selectedUser.address ) ? selectedUser.address.city : ( ( singleUser && singleUser.address ) ? singleUser.address.city : "" ) }</Tag> }
            </div>

            <div className='attachment'>
                <h4 className='email-text'>ATTACHMENTS</h4>
                {
                    <div className='attachment-list'>
                        <ul><li>
                            { ( selectedUser && selectedUser.company ) ? selectedUser.company.name : ( ( singleUser && singleUser.company ) ? singleUser.company.name : "" ) }
                        </li></ul>
                    </div> }

                <div className="view-all-button">
                    <Button type="link">View All</Button>
                </div>
            </div>
            <br /><br />
            <div className='react-button'>
                <Button className="ReactButton" type="primary">React</Button>
            </div>
        </div>

    )
}

export default Information
