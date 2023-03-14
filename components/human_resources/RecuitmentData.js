import axios from "axios";
import { View, Text, StyleSheet, Button } from "react-native";

export const fetchAllRecuitment = () => axios.get("https://af78-171-224-181-231.ngrok.io/v1/api/employee_projects");

export const fetchAllCandidate = () => axios.get("https://af78-171-224-181-231.ngrok.io/v1/api/candidates");

export const part_skills_requirement = [
    {
        "indenty": "Kỹ sư website (BackEnd, FrontEnd)",
        "level": "1 - 6",
        "part": "Development",
        "time": "Fulltime",
        "salary": "Up to 2500$",
        "requirement": "Có kinh nghiệm tối thiểu 6 tháng về CNTT và phát triển sản phẩm phần mềm. Thành thạo một trong các ngôn ngữ: C/C++, Java, Python, C#, Javascript. Có kinh nghiệm sử dụng các Framework: Laravel, Django, .NET là lợi thế. Ưu tiên có kinh nghiệm làm việc với các thư viện Frontend (VueJS, ReactJS, Angular).",
        "benefit": "Cấp macbook Pro, màn hình del 24 inch. Lương năm tối thiếu 14 tháng. Được hỗ trợ chi phí đi lại. Hỗ trợ mua sách miễn phí. Cơm trưa 50k/ngày. Hỗ trợ chứng chỉ từ 1 - 5 triệu nếu có.",
        "count": 1,
    },
    {
        "indenty": "Chuyên viên kiểm thử",
        "level": "1 - 6",
        "part": "Testing",
        "time": "Fulltime",
        "salary": "Up to 1200$",
        "requirement": "Có kinh nghiệm tối thiểu 6 tháng về CNTT và phát triển sản phẩm phần mềm. Có hiểu biết về kiểm thử hệ thống. Thành thạo về test case, kiểm thử hộp đen, hộp trắng, kiểm thử usecase. Có khả năng đặt ra các tình huống test case.",
        "benefit": "Cấp macbook Pro, màn hình del 24 inch. Lương năm tối thiếu 14 tháng. Được hỗ trợ chi phí đi lại. Hỗ trợ mua sách miễn phí. Cơm trưa 50k/ngày. Hỗ trợ chứng chỉ từ 1 - 5 triệu nếu có.",
        "count": 1,
    },
    {
        "indenty": "Chuyên gia thương mại",
        "level": "1 - 6",
        "part": "BA",
        "time": "Fulltime",
        "salary": "Up to 2000$",
        "requirement": "Có kinh nghiệm tối thiểu 6 tháng về CNTT và phát triển sản phẩm phần mềm. Thành thạo một trong các ngôn ngữ: C/C++, Java, Python, C#, Javascript. Có khả năng phân tích thiết kế hệ thống. Giao tiếp tốt bằng cả tiếng Anh và Nhật",
        "benefit": "Cấp macbook Pro, màn hình del 24 inch. Lương năm tối thiếu 14 tháng. Được hỗ trợ chi phí đi lại. Hỗ trợ mua sách miễn phí. Cơm trưa 50k/ngày. Hỗ trợ chứng chỉ từ 1 - 5 triệu nếu có.",
        "count": 1,
    },
]

export const mock_data = [
    {
        "level": 1,
        "part": "Development"
    },
    {
        "level": 1,
        "part": "Development"
    },
    {
        "level": 1,
        "part": "Testing"
    },
    {
        "level": 1,
        "part": "Testing"
    },
    {
        "level": 2,
        "part": "BA"
    },
    {
        "level": 2,
        "part": "BA"
    },
    {
        "level": 1,
        "part": "BA"
    },
    {
        "level": 1,
        "part": "BA"
    },
]

export const filterData = (data) => {
    var arr = [];
    for (var item in data){
        console.log(data[item]);
    }
}

export const RecuitmentItem = ({data, navigation}) => {

    return (
        <View style={styles.view}>
            <View>
                <Text style={styles.text}>{data.indenty}</Text>
            </View>
            <View style={styles.view_child}>
                <Text>- Cấp độ: {data.level}</Text>
            </View>
            <View style={styles.view_child}>
                <Text>- Bộ phận: {data.part}</Text>
            </View>
            <View style={styles.view_child}>
                <Text>- Hình thức: {data.time}</Text>
            </View>
            <View style={styles.view_child}>
                <Text>- Mức lương: {data.salary}</Text>
            </View>
            <View style={styles.view_child}>
                <Text>- Yêu cầu: {data.requirement}</Text>
            </View>
            <View style={styles.view_child}>
                <Text>- Lợi ích: {data.benefit}</Text>
            </View>
            <View style={styles.view_child}>
                <Text>- Số lượng: {data.count}</Text>
            </View>
            <Button
                onPress={() => navigation.navigate('Candidate')}
                title = "Ứng tuyển ngay"
                color = "#7a42f4"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        padding: 20,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 5,
    },
    view_child: {
        marginBottom: 5
    },
    text: {
        fontWeight: "bold"
    }
})