<script>
export default {
    name:"Content",
    data(){
        return{

        }
    },
    props:{
        contents:{
            type:Array
        }
    },
    render(){
        return(
            <div>
                {
                    this.contents.map((element,index) => {
                        return (
                            <div>
                                { element.active ? element.$slots.default : '' }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
</script>

<style scoped>

</style>
