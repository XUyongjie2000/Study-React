import propTypes from "prop-types"

const CommDaughter=(prop)=>{
          return(
              <div className="daughter">
                  <h3>我是女组件({propTypes.daughter})</h3>
                  <p>{prop.brotherMsg}</p>
              </div>
          )
}
//给组件声明默认值
CommDaughter.defaultProps={
    daughter:"曹丽"
}
/**
 * 2.如何在子组件中校验参数类型?
 * 通过propTypes
 * npm install prop-types
 * https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
// 规定我这个组件能接受的props的属性的数据类型
CommDaughter.propTypes={
    daughter:propTypes.string
}
export default CommDaughter;