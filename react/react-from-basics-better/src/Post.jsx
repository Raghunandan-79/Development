import React from 'react'
import timeImg from './time.png'

const style = {
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    display: "flex",
    flexDirection: "column"
}

const PostComponent = ({ name, subtitle, time, image, description }) => {
    return (
        <div style={style}>
            <div style={{ 
                display: "flex"
            }}>
                <img
                    src={image}
                    alt="image"
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20
                    }}
                />

                <div style={{
                    fontSize: 12,
                    marginLeft: 10
                }}>
                    <b>{name}</b>

                    <div>{subtitle}</div>

                    {(time !== undefined) ? <div style={{
                        display: "flex"
                    }}>
                        <div>{time}</div>
                        <img src={timeImg} style={{
                            width: 12,
                            height: 12
                        }} />
                    </div> : null}
                </div>
            </div>

            <div style={{
                fontSize: 15
            }}>
                {description}
            </div>
        </div>
    )
}

export default PostComponent