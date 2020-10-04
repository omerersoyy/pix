export const extractImageSet = (rawData, config) => {

    const {root, each, set, prop} = config

    if(!root) {
        return [{
            data: rawData,
            prop
        }]
    } else {
        const rootObject = rawData[root]

        if(!each) {
            return [{
                data: rootObject,
                prop
            }]
        } else {
            return rootObject.map((val, _idx) => {
                return (
                    {
                        data: val[each][set],
                        prop
                    }
                )
            })
        }
    }
}

export const getFlexPositions = ({vertical, horizontal}) => {
    
    const flexPositions = {
        top: "flex-start",
        left: "flex-start",
        middle: "center",
        bottom: "flex-end",
        right: "flex-end"
    }

    return {
        justifyContent: flexPositions[vertical],
        alignItems: flexPositions[horizontal]
    }
}