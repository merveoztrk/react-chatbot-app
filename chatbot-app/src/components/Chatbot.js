import React, { useEffect, useState } from 'react'
import { Space, Card, Tag, Avatar, List, Button, Input, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SettingOutlined, PaperClipOutlined, SmileOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
import '../style/chatbot.css'

const Chatbot = ( props ) =>
{
    const [ selectedId, setSelectedId ] = useState( [] )
    const [ selectedUser, setSelectedUser ] = useState( [] )
    const [ singleUser, setSingleUser ] = useState( [] )

    console.log( "chatbot props", props )
    console.log( "chatbota gelen selectedId", props.selectedId )
    console.log( "chatbota gelen users", props.users )

    useEffect( () =>
    {
        setSelectedId( props.selectedId )

    }, [ props.selectedId ] )


    useEffect( () =>
    {
        if ( props.users.length > 0 )
        {
            let filteredUser = props.users.filter( ( el ) => el.id === props.selectedId ) //seçilen kullanıcı ile tüm kullanıcılar arasında aynı id'ye sahip olanları filtreliyorum 
            console.log( "filteredUser", filteredUser[ 0 ] )
            setSelectedUser( filteredUser[ 0 ] )//fitrelenip dönen, yani seçilen kullanıcıyı state'imin setterına atıp güncelliyorum
            let arr = [] //seçim yapılmadığında ilk kullanıcı gelsin headera, seçim yapılmadığında header boş durmasın istiyorum 
            arr.push( props.users[ 0 ] ) //ilk kullanıcıyı arraye pushladım
            setSingleUser( arr )
            console.log( props.selectedId )
        }
    }, [ props.selectedId, props.users ] )

    // console.log( "chatbot usersLog", usersLog )
    // console.log( "users", users )
    // console.log( "users type", typeof users )
    // console.log( "usersLog", usersLog )

    return (
        <>
            <div className='header'>
                <List
                    itemLayout="horizontal"
                    dataSource={ selectedId ? [ selectedUser ] : singleUser } //selected yapıldıysa seçilen kullanıcı gelsin yapılmadıysa her zaman listin ilk kullanıcısı gelsin 
                    renderItem={ ( item ) => (
                        <List.Item>
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

            <div className='text-area'>
                <div className='body'>
                    <div className='chatbox1'><p className='cb1-text'>Hi! My name’s Botty.</p></div>
                    <div className='chatbox2'><p className='cb2-text'>Hi Botty! How are you?</p></div>
                    <div className='chatbox3'><p className='cb3-text'>Living the dream.</p></div>
                </div>
                <div className='footer'>
                    <div className='input'>
                        <Input placeholder="Write a message..." bordered={ false } style={ { width: "100%", color: "#01AAF3" } } />
                    </div>

                    <div className='footer-buttons'>
                        <Button type="link" icon={ <SmileOutlined /> } ></Button>
                        <Button type="link" icon={ <PaperClipOutlined /> } ></Button>
                        <Button type="link">Send</Button>
                    </div>

                </div>
                {/* <Divider className="devider" /> */ }
            </div>




        </>
    )
}

export default Chatbot
