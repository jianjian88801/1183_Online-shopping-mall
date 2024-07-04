const base = {
    get() {
                return {
            url : "http://localhost:8080/wangshangshangchengB/",
            name: "wangshangshangchengB",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wangshangshangchengB/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "网上商城系统"
        } 
    }
}
export default base
