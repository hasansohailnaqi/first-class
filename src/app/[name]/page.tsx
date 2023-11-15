
export const generateStaticParams = () => {
    return[
        {name: "hamza"
    },

    { name: "hamzo"

    },

    { name: "hamzii"

    },

    ]
}



const About = (props:any) => {
    console.log()
    return (
  
        <><h2>{props.params.name} hasan profile </h2>
        </>
    ) 

}

export default About

const ob ={
    params: {name: `hasan`}
}