import styled from "styled-px2vw-plugin"
const TestDivWrapper = styled.div`
  margin: 50px 0 0 50px;
  padding: 10px;
  box-sizing: content-box;
  display: inline-block;
`
const Wrapper = styled(TestDivWrapper)`
`
const App = () => {
    return <Wrapper>Hello world</Wrapper>
}
export default App
