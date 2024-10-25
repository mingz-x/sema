import axios from 'axios'
    

const instant = axios.create({
    baseURL: "http://openapi.seoul.go.kr:8088/53776b4d556d696e37336c426f7670/json/"
})


export async function getData(){
    let [exhibition, education, collection] = await Promise.all([
                instant.get('ListExhibitionOfSeoulMOAInfo/1/200/'),
                instant.get('ListEducationOfSeoulMOAInfo/1/200/'),
                instant.get('SemaPsgudInfoKorInfo/1/200/')
            ]);

            console.log(exhibition, education, collection)

            
            exhibition = exhibition.data.ListExhibitionOfSeoulMOAInfo.row;
            education = education.data.ListEducationOfSeoulMOAInfo.row;
            collection = collection.data.SemaPsgudInfoKorInfo.row;

            

    return {exhibition, education, collection};
}

