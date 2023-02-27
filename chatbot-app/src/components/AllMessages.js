import React, { useEffect, useState } from 'react'
import '../style/allmessage.css'
import { Card, Dropdown, List, MenuProps, Avatar, message, Space } from 'antd'
import { SettingOutlined, DownOutlined } from '@ant-design/icons';
import Chatbot from './Chatbot';
import Information from './Information';

const AllMessages = ( props ) =>
{
    const [ usersLog, setUsersLog ] = useState();

    useEffect( () =>
    {
        let arr = props.users.slice( 0, 8 )
        setUsersLog( arr )
        // setUsersLog( users )
    }, [ props.users ] )

    // console.log( "users", users )
    // console.log( "users type", typeof users )
    // console.log( "usersLog", usersLog )

    const items = [
        {
            label: '1st menu item',
            key: '1',
        },
        {
            label: '2nd menu item',
            key: '2',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];

    // const onClick = ( { key } ) =>
    // {
    //     message.info( `Click on item ${ key }` );
    // };
    return (
        <div className='left-sight'>

            <div className='left-cards-first' >
                <Dropdown
                    menu={ {
                        items,
                    } }
                    trigger={ [ 'click' ] }
                >
                    <a onClick={ ( e ) => e.preventDefault() }>
                        <Space>
                            All Messages
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
                <div className='setting-icon'>
                    <SettingOutlined />
                </div>
            </div >

            <div className='left-cards-second' >
                <List
                    itemLayout="horizontal"
                    dataSource={ usersLog ? usersLog : [] }
                    renderItem={ ( item ) => (

                        <List.Item onClick={ () => props.puller( item.id ) }>
                            <List.Item.Meta
                                style={ { width: '340px' } }
                                avatar={ <Avatar src={ `https://i.pravatar.cc/150?img=${ item.id }` } /> }
                                title={ <a>{ item.name }</a> }
                                description={ item.email }
                            />
                        </List.Item>
                    ) }
                />
            </div>
        </div>

    )
}

export default AllMessages
