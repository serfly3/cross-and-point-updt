import { CrossInfo } from "@/app/components/CrossInfo/CrossInfo"
import { data } from "@/app/data/data"
import { NotFound } from "@/app/components/NotFound/NotFound";

export default function SneakerPage(props) {
    const params = props.params;
    console.log(typeof (params), params)
    console.log(typeof(Number(params.id)))

    if (data.length < Number(params.id) || Number(params.id) < 1) {
        return <NotFound />
    } else {
        return (
            data.map((item) => {
                if (item.id == params.id) {
                    return (
                        <CrossInfo
                            name={item.name}
                            id={item.id}
                            img={item.img}
                            pgh1={item.pgh1}
                            pgh2={item.pgh2}
                            gh3={item.pgh3}
                            pgh4={item.pgh4}
                            pgh5={item.pgh5}
                            description={item.description}
                            date={item.date}
                            price={item.price}
                            materials={item.materials}
                            key={item.id}
                        />
                    )
                }
            })
        )
    }
} 