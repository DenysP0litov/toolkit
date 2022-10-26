(self.webpackChunkd_politov_toolkit=self.webpackChunkd_politov_toolkit||[]).push([[179],{"./src/stories/carousel/carousel.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return carousel_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Carousel=function Carousel(_ref){var children=_ref.children,_useState=(0,react.useState)(1),_useState2=(0,slicedToArray.Z)(_useState,2),slide=_useState2[0],setSlide=_useState2[1],slides=react.Children.toArray(children),slidesAmount=slides.length,changeSlide=function changeSlide(direction){"prev"===direction&&1!==slide?setSlide(slide-1):"next"===direction&&slide!==slidesAmount&&setSlide(slide+1)};return(0,jsx_runtime.jsxs)("div",{className:"carousel",children:[(0,jsx_runtime.jsx)("button",{className:"carousel__button",onClick:function onClick(){return changeSlide("prev")},children:"<"}),(0,jsx_runtime.jsx)("div",{className:"carousel__slide-container",children:(0,jsx_runtime.jsx)("div",{className:"carousel__slides",style:{width:"".concat(100*slidesAmount,"%"),transform:"translateX(".concat(-100/slidesAmount*(slide-1),"%)")},children:slides.map((function(slide,index){return(0,jsx_runtime.jsx)("div",{className:"carousel__slide",children:slide},index)}))})}),(0,jsx_runtime.jsx)("button",{className:"carousel__button",onClick:function onClick(){return changeSlide("next")},children:">"})]})};try{Carousel.displayName="Carousel",Carousel.__docgenInfo={description:"",displayName:"Carousel",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/carousel/carousel.tsx#Carousel"]={docgenInfo:Carousel.__docgenInfo,name:"Carousel",path:"src/stories/carousel/carousel.tsx#Carousel"})}catch(__react_docgen_typescript_loader_error){}var carousel_stories={title:"Carousel",component:Carousel},Primary=function Template(args){return(0,jsx_runtime.jsxs)(Carousel,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{children:[(0,jsx_runtime.jsx)("div",{children:"slide-1"}),(0,jsx_runtime.jsx)("div",{children:"slide-2"}),(0,jsx_runtime.jsx)("div",{children:"slide-3"})]}))}.bind({});Primary.args={},Primary.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => {\r\n    return (\r\n        <Carousel {...args}>\r\n            <div>\r\n                slide-1\r\n            </div>\r\n            <div>\r\n                slide-2\r\n            </div>\r\n            <div>\r\n                slide-3\r\n            </div>\r\n        </Carousel>\r\n    )\r\n}"}},Primary.parameters);var __namedExportsOrder=["Primary"]},"./src/stories/expandable-sidebar/expandable-sidebar.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return expandable_sidebar_expandable_sidebar_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ExpandableSidebar=function ExpandableSidebar(_ref){var children=_ref.children,status=_ref.status,onChange=_ref.onChange,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),styleStatus=_useState2[0],setStyle=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.Z)(_useState3,2),showStatus=_useState4[0],setShow=_useState4[1];(0,react.useEffect)((function(){status?(setShow(status),setTimeout((function(){setStyle(status)}),50)):status||(setStyle(status),setTimeout((function(){setShow(!1)}),500))}),[status]);var sidebar=(0,react.useRef)(null);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:showStatus&&(0,jsx_runtime.jsx)("div",{className:classnames_default()("sidebar",{"sidebar--shown":styleStatus}),onClick:function onClick(event){return function handleClick(event){event.target===sidebar.current&&onChange(!1)}(event)},ref:sidebar,children:(0,jsx_runtime.jsx)("div",{className:"sidebar-content",children:children})})})};try{ExpandableSidebar.displayName="ExpandableSidebar",ExpandableSidebar.__docgenInfo={description:"",displayName:"ExpandableSidebar",props:{status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/expandable-sidebar/expandable-sidebar.tsx#ExpandableSidebar"]={docgenInfo:ExpandableSidebar.__docgenInfo,name:"ExpandableSidebar",path:"src/stories/expandable-sidebar/expandable-sidebar.tsx#ExpandableSidebar"})}catch(__react_docgen_typescript_loader_error){}var expandable_sidebar_expandable_sidebar_stories={title:"Expandable Sidebar",component:ExpandableSidebar},Primary=function Template(args){var _useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),sidebarStatus=_useState2[0],setSidebar=_useState2[1];return(0,jsx_runtime.jsxs)("main",{children:[(0,jsx_runtime.jsx)("button",{className:"sidebar-story-button",onClick:function onClick(){return setSidebar(!0)},children:"Open sidebar"}),(0,jsx_runtime.jsxs)(ExpandableSidebar,{onChange:setSidebar,status:sidebarStatus,children:[(0,jsx_runtime.jsx)("h1",{children:"Hello world!"}),(0,jsx_runtime.jsx)("button",{className:"sidebar-story-button",onClick:function onClick(){return setSidebar(!1)},children:"Bye!"})]})]})}.bind({});Primary.args={},Primary.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => {\r\n  const [sidebarStatus, setSidebar] = useState(false)\r\n\r\n  return (\r\n    <main>\r\n      <button className='sidebar-story-button' onClick={() => setSidebar(true)}>Open sidebar</button>\r\n      <ExpandableSidebar onChange={setSidebar} status={sidebarStatus}>\r\n        <h1>Hello world!</h1>\r\n        <button className='sidebar-story-button' onClick={() => setSidebar(false)}>Bye!</button>\r\n      </ExpandableSidebar>\r\n    </main>\r\n  )\r\n}"}},Primary.parameters);var __namedExportsOrder=["Primary"]},"./src/stories/multiselect/multiselect.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return multiselect_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),ArrowDropUp=__webpack_require__("./node_modules/@mui/icons-material/esm/ArrowDropUp.js"),ArrowDropDown=__webpack_require__("./node_modules/@mui/icons-material/esm/ArrowDropDown.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Multiselect=function Multiselect(_ref){var title=_ref.title,currentValues=_ref.currentValues,values=_ref.values,onChange=_ref.onChange,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),listStatus=_useState2[0],setStatus=_useState2[1],handleSelectClick=function handleSelectClick(value){if(value)if(currentValues.includes(value)){if(currentValues.includes(value)){var valueIndex=currentValues.findIndex((function(curValue){return curValue===value}));onChange([].concat((0,toConsumableArray.Z)(currentValues.slice(0,valueIndex)),(0,toConsumableArray.Z)(currentValues.slice(valueIndex+1))))}}else onChange([].concat((0,toConsumableArray.Z)(currentValues),[value]));else onChange([]);setStatus(!1)};return(0,jsx_runtime.jsxs)("div",{className:"multiselect",children:[(0,jsx_runtime.jsxs)("div",{className:classnames_default()("multiselect__field",{"multiselect__field--unselected":0===currentValues.length}),onClick:function onClick(){return setStatus(!listStatus)},children:[0===currentValues.length?title:currentValues.join(", "),listStatus?(0,jsx_runtime.jsx)(ArrowDropUp.Z,{className:"multiselect__arrow"}):(0,jsx_runtime.jsx)(ArrowDropDown.Z,{className:"multiselect__arrow"})]}),(0,jsx_runtime.jsxs)("ul",{className:classnames_default()("multiselect__list",{"multiselect__list--active":listStatus}),children:[(0,jsx_runtime.jsx)("li",{onClick:function onClick(){return handleSelectClick("")},className:"multiselect__list-item",children:"Clear"},"Clear"),values.map((function(value){return(0,jsx_runtime.jsx)("li",{onClick:function onClick(){return handleSelectClick(value)},className:classnames_default()("multiselect__list-item",{"multiselect__list-item--active":currentValues.includes(value)}),children:value},value)}))]})]})};try{Multiselect.displayName="Multiselect",Multiselect.__docgenInfo={description:"",displayName:"Multiselect",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},currentValues:{defaultValue:null,description:"",name:"currentValues",required:!0,type:{name:"string[]"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string[]) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/multiselect/multiselect.tsx#Multiselect"]={docgenInfo:Multiselect.__docgenInfo,name:"Multiselect",path:"src/stories/multiselect/multiselect.tsx#Multiselect"})}catch(__react_docgen_typescript_loader_error){}var multiselect_stories={title:"Multiselect",component:Multiselect},Primary=function Template(args){var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray.Z)(_useState,2),select=_useState2[0],setSelect=_useState2[1];return(0,jsx_runtime.jsx)(Multiselect,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{onChange:setSelect,currentValues:select}))}.bind({});Primary.args={title:"Multiselect",values:["First","Second","Third","Hello","World","Not so long name"]},Primary.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => {\r\n    const [select, setSelect] = useState<string[]>([])\r\n\r\n    return (\r\n        <Multiselect {...args} onChange={setSelect} currentValues={select}/>\r\n    )\r\n}"}},Primary.parameters);var __namedExportsOrder=["Primary"]},"./src/stories/pagination/pagination.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return pagination_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Pagination=function Pagination(_ref){var currentPage=_ref.currentPage,pagesCount=_ref.pagesCount,_ref$siblingsCount=_ref.siblingsCount,siblingsCount=void 0===_ref$siblingsCount?1:_ref$siblingsCount,_ref$borderCount=_ref.borderCount,borderCount=void 0===_ref$borderCount?1:_ref$borderCount,onChange=_ref.onChange,pagesArr=function createPaginationArray(currentPage,pagesCount,siblingsCount,borderCount){var pagesArr=[];if(currentPage>borderCount+siblingsCount+2&&currentPage<=pagesCount-borderCount-siblingsCount-2){for(var i=1;i<=borderCount;i++)pagesArr.push(i);pagesArr.push("...");for(var _i=-siblingsCount;_i<=siblingsCount;_i++)pagesArr.push(currentPage+_i);pagesArr.push("...");for(var _i2=pagesCount-borderCount+1;_i2<=pagesCount;_i2++)pagesArr.push(_i2)}else if(currentPage>borderCount+siblingsCount+2){for(var _i3=1;_i3<=borderCount;_i3++)pagesArr.push(_i3);pagesArr.push("...");for(var _i4=pagesCount-borderCount-2*siblingsCount-1;_i4<=pagesCount;_i4++)pagesArr.push(_i4)}else if(currentPage<=pagesCount-borderCount-siblingsCount-2){for(var _i5=1;_i5<=borderCount+2*siblingsCount+2;_i5++)pagesArr.push(_i5);pagesArr.push("...");for(var _i6=pagesCount-borderCount+1;_i6<=pagesCount;_i6++)pagesArr.push(_i6)}return pagesArr}(currentPage,pagesCount,siblingsCount,borderCount);return(0,jsx_runtime.jsxs)("div",{className:"pagination",children:[(0,jsx_runtime.jsx)("button",{className:"pagination__btn",onClick:function prevPage(){1!==currentPage&&onChange(currentPage-1)},children:1===currentPage?"|":"<"}),(0,jsx_runtime.jsx)("ul",{className:"pagination__btns-nums",children:pagesArr.map((function(page){return"..."===page?(0,jsx_runtime.jsx)("li",{className:"pagination__btn-num",children:"..."}):(0,jsx_runtime.jsx)("li",{className:classnames_default()("pagination__btn-num",{"pagination__btn-num--active":currentPage===page}),onClick:function onClick(){return onChange(page)},children:page},page)}))}),(0,jsx_runtime.jsx)("button",{className:"pagination__btn",onClick:function nextPage(){currentPage!==pagesCount&&onChange(currentPage+1)},children:currentPage===pagesCount?"|":">"})]})};try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},pagesCount:{defaultValue:null,description:"",name:"pagesCount",required:!0,type:{name:"number"}},siblingsCount:{defaultValue:{value:"1"},description:"",name:"siblingsCount",required:!1,type:{name:"number"}},borderCount:{defaultValue:{value:"1"},description:"",name:"borderCount",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/pagination/pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/stories/pagination/pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js"),pagination_stories={title:"Pagination",component:Pagination},Primary=function Template(args){var _useState=(0,react.useState)(1),_useState2=(0,slicedToArray.Z)(_useState,2),page=_useState2[0],setPage=_useState2[1];return(0,jsx_runtime.jsx)(Pagination,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{onChange:setPage,currentPage:page}))}.bind({});Primary.args={pagesCount:10,siblingsCount:1,borderCount:1},Primary.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => {\r\n    const [page, setPage] = useState(1)\r\n\r\n    return (\r\n        <Pagination {...args} onChange={setPage} currentPage={page}/>\r\n    )\r\n}"}},Primary.parameters);var __namedExportsOrder=["Primary"]},"./src/stories/select/select.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return select_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),ArrowDropUp=__webpack_require__("./node_modules/@mui/icons-material/esm/ArrowDropUp.js"),ArrowDropDown=__webpack_require__("./node_modules/@mui/icons-material/esm/ArrowDropDown.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Select=function Select(_ref){var title=_ref.title,currentValue=_ref.currentValue,values=_ref.values,onChange=_ref.onChange,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),listStatus=_useState2[0],setStatus=_useState2[1],longestValueLength=Math.max.apply(Math,(0,toConsumableArray.Z)(values.map((function(value){return value.length})))),longestValue=values.find((function(value){return value.length===longestValueLength})),changeSelect=function changeSelect(value){onChange(value),setStatus(!1)};return(0,jsx_runtime.jsxs)("div",{className:"select",children:[(0,jsx_runtime.jsxs)("div",{className:classnames_default()("select__field",{"select__field--unselected":!currentValue}),onClick:function onClick(){return setStatus(!listStatus)},children:[currentValue||title,listStatus?(0,jsx_runtime.jsx)(ArrowDropUp.Z,{className:"select__arrow"}):(0,jsx_runtime.jsx)(ArrowDropDown.Z,{className:"select__arrow"})]}),(0,jsx_runtime.jsx)("div",{className:"select__width-expander",children:longestValue}),(0,jsx_runtime.jsxs)("ul",{className:classnames_default()("select__list",{"select__list--active":listStatus}),children:[(0,jsx_runtime.jsx)("li",{onClick:function onClick(){return changeSelect("")},className:"select__list-item",children:"None"},"None"),values.map((function(value){return(0,jsx_runtime.jsx)("li",{onClick:function onClick(){return changeSelect(value)},className:classnames_default()("select__list-item",{"select__list-item--active":value===currentValue}),children:value},value)}))]})]})};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},currentValue:{defaultValue:null,description:"",name:"currentValue",required:!0,type:{name:"string"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/select/select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/stories/select/select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}var select_stories={title:"Select",component:Select},Primary=function Template(args){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),select=_useState2[0],setSelect=_useState2[1];return(0,jsx_runtime.jsx)(Select,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{onChange:setSelect,currentValue:select}))}.bind({});Primary.args={title:"Select",values:["First","Second","Third","Hello","World","Not so long name"]},Primary.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => {\r\n    const [select, setSelect] = useState('')\r\n\r\n    return (\r\n        <Select {...args} onChange={setSelect} currentValue={select}/>\r\n    )\r\n}"}},Primary.parameters);var __namedExportsOrder=["Primary"]},"./src/stories/slider/slider.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return slider_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Slider=function Slider(_ref){var _ref$value=_ref.value,value=void 0===_ref$value?.5:_ref$value,checkPoints=_ref.checkPoints,onChange=_ref.onChange,slider=(0,react.useRef)(null),point=(0,react.useRef)(null),_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),position=_useState2[0],setPosition=_useState2[1];(0,react.useEffect)((function(){setPosition(value*(slider.current.clientWidth-point.current.clientWidth))}),[]),(0,react.useEffect)((function(){onChange(position/(slider.current.clientWidth-point.current.clientWidth)),console.log(value)}));return(0,jsx_runtime.jsxs)("div",{ref:slider,className:"slider",onClick:function onClick(event){return function setPoint(event){var newPosition=event.clientX-point.current.clientWidth/2-slider.current.getBoundingClientRect().left,rightEdge=slider.current.clientWidth-point.current.clientWidth;setPosition(newPosition<0?0:newPosition>rightEdge?rightEdge:newPosition)}(event)},children:[(0,jsx_runtime.jsx)("div",{ref:point,className:"slider__point",onMouseDown:function onMouseDown(event){return function catchPoint(event){var shiftX=event.clientX-point.current.getBoundingClientRect().left,movePoint=function movePoint(moveEvent){var newPosition=moveEvent.clientX-shiftX-slider.current.getBoundingClientRect().left,rightEdge=slider.current.clientWidth-point.current.clientWidth;if(newPosition<0)setPosition(0);else if(newPosition>rightEdge)setPosition(rightEdge);else if(checkPoints){for(var checkPointsX=[],i=0;i<checkPoints;i++)checkPointsX.push(rightEdge/checkPoints*i);var closestCheckpoint=0,closestDistance=rightEdge;checkPointsX.forEach((function(checkPointX,i){Math.abs(newPosition-checkPointX)<closestDistance&&(closestDistance=Math.abs(newPosition-checkPointX),closestCheckpoint=i)})),setPosition(checkPointsX[closestCheckpoint])}else setPosition(newPosition)};document.addEventListener("mousemove",movePoint),document.addEventListener("mouseup",(function putPoint(event){document.removeEventListener("mousemove",movePoint),document.removeEventListener("mouseup",putPoint)}))}(event)},style:{left:position+"px"},onDragStart:function onDragStart(event){event.preventDefault()},onDrag:function onDrag(event){event.preventDefault()}}),(0,jsx_runtime.jsx)("div",{className:"slider__filled-bar",style:{width:"".concat(position+10,"px")}}),(0,jsx_runtime.jsx)("div",{className:"slider__empty-bar",style:{width:"calc(100% - ".concat(position,"px)")}})]})};try{Slider.displayName="Slider",Slider.__docgenInfo={description:"",displayName:"Slider",props:{value:{defaultValue:{value:"0.5"},description:"",name:"value",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newValue: number) => void"}},checkPoints:{defaultValue:null,description:"",name:"checkPoints",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/slider/slider.tsx#Slider"]={docgenInfo:Slider.__docgenInfo,name:"Slider",path:"src/stories/slider/slider.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}var slider_stories={title:"Slider",component:Slider},Primary=function Template(args){var _useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1];return(0,jsx_runtime.jsx)(Slider,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{onChange:setValue,value:value}))}.bind({});Primary.args={checkPoints:10},Primary.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => {\r\n    const [value, setValue] = useState(0)\r\n\r\n    return (\r\n        <Slider {...args} onChange={setValue} value={value}/>\r\n    )\r\n}"}},Primary.parameters);var __namedExportsOrder=["Primary"]},"./src/stories/tabs/tabs.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return tabs_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Tabs=function Tabs(_ref){var currentTab=_ref.currentTab,tabs=_ref.tabs,onChange=_ref.onChange;return currentTab||(currentTab=tabs[0].value),(0,jsx_runtime.jsx)("ul",{className:"tabs",children:tabs.map((function(tab){return(0,jsx_runtime.jsx)("li",{onClick:function onClick(){return onChange(tab.value)},className:classnames_default()("tabs__tab",{"tabs__tab-active":currentTab===tab.value}),children:tab.label},"".concat(tab.value))}))})};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{currentTab:{defaultValue:null,description:"",name:"currentTab",required:!0,type:{name:"T | undefined"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"{ label: string; value: T; }[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: T) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/tabs/tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/stories/tabs/tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}var tabs_stories={title:"Tabs",component:Tabs},Primary=function Template(args){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),tab=_useState2[0],setTab=_useState2[1];return(0,jsx_runtime.jsx)(Tabs,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{onChange:setTab,currentTab:tab}))}.bind({});Primary.args={tabs:[{label:"First",value:"first"},{label:"Second",value:"second"}]};var __namedExportsOrder=["Primary"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/carousel/carousel.stories.tsx":"./src/stories/carousel/carousel.stories.tsx","./stories/expandable-sidebar/expandable-sidebar.stories.tsx":"./src/stories/expandable-sidebar/expandable-sidebar.stories.tsx","./stories/multiselect/multiselect.stories.tsx":"./src/stories/multiselect/multiselect.stories.tsx","./stories/pagination/pagination.stories.tsx":"./src/stories/pagination/pagination.stories.tsx","./stories/select/select.stories.tsx":"./src/stories/select/select.stories.tsx","./stories/slider/slider.stories.tsx":"./src/stories/slider/slider.stories.tsx","./stories/tabs/tabs.stories.tsx":"./src/stories/tabs/tabs.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[310],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);