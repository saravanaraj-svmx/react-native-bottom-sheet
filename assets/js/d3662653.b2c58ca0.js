"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8546],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=o.createContext({}),p=function(t){var e=o.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return o.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,m=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(m,".").concat(d)]||u[d]||s[d]||a;return n?o.createElement(f,i(i({ref:e},c),{},{components:n})):o.createElement(f,i({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3339:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],l={id:"bottomsheetfooter",title:"BottomSheetFooter",description:"an interactive footer component for the BottomSheet.",image:"/img/bottom-sheet-preview.gif",slug:"/components/bottomsheetfooter"},m=void 0,p={unversionedId:"components/bottomsheetfooter",id:"components/bottomsheetfooter",isDocsHomePage:!1,title:"BottomSheetFooter",description:"an interactive footer component for the BottomSheet.",source:"@site/docs/components/bottomsheetfooter.md",sourceDirName:"components",slug:"/components/bottomsheetfooter",permalink:"/react-native-bottom-sheet/components/bottomsheetfooter",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/docs/components/bottomsheetfooter.md",tags:[],version:"current",frontMatter:{id:"bottomsheetfooter",title:"BottomSheetFooter",description:"an interactive footer component for the BottomSheet.",image:"/img/bottom-sheet-preview.gif",slug:"/components/bottomsheetfooter"},sidebar:"packages",previous:{title:"BottomSheetBackdrop",permalink:"/react-native-bottom-sheet/components/bottomsheetbackdrop"},next:{title:"BottomSheetTextInput",permalink:"/react-native-bottom-sheet/components/bottomsheettextinput"}},c=[{value:"Props",id:"props",children:[{value:"<code>animatedFooterPosition</code>",id:"animatedfooterposition",children:[]},{value:"<code>bottomInset</code>",id:"bottominset",children:[]},{value:"<code>children</code>",id:"children",children:[]}]},{value:"Example",id:"example",children:[]}],s={toc:c};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A pre-built component that sticks to the bottom of the BottomSheet and can be modify to fit your own custom interaction."),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"animatedfooterposition"},(0,a.kt)("inlineCode",{parentName:"h3"},"animatedFooterPosition")),(0,a.kt)("p",null,"Calculated footer animated position."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"default"),(0,a.kt)("th",{parentName:"tr",align:null},"required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Animated.SharedValue<number",">"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"NO")))),(0,a.kt)("h3",{id:"bottominset"},(0,a.kt)("inlineCode",{parentName:"h3"},"bottomInset")),(0,a.kt)("p",null,"Bottom inset to be added below the footer."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"default"),(0,a.kt)("th",{parentName:"tr",align:null},"required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"NO")))),(0,a.kt)("h3",{id:"children"},(0,a.kt)("inlineCode",{parentName:"h3"},"children")),(0,a.kt)("p",null,"Component to be placed in the footer."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"default"),(0,a.kt)("th",{parentName:"tr",align:null},"required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ReactNode ","|"," ReactNode[]"),(0,a.kt)("td",{parentName:"tr",align:null},"undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"NO")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useCallback, useMemo, useRef } from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\nimport BottomSheet, { BottomSheetFooter } from '@gorhom/bottom-sheet';\n\nconst App = () => {\n  // ref\n  const bottomSheetRef = useRef<BottomSheet>(null);\n\n  // variables\n  const snapPoints = useMemo(() => ['25%', '50%'], []);\n\n  // renders\n  const renderFooter = useCallback(\n    props => (\n      <BottomSheetFooter {...props} bottomInset={24}>\n        <View style={styles.footerContainer}>\n          <Text style={styles.footerText}>Footer</Text>\n        </View>\n      </BottomSheetFooter>\n    ),\n    []\n  );\n  return (\n    <View style={styles.container}>\n      <BottomSheet\n        ref={bottomSheetRef}\n        index={1}\n        snapPoints={snapPoints}\n        footerComponent={renderFooter}\n      >\n        <View style={styles.contentContainer}>\n          <Text>Awesome \ud83c\udf89</Text>\n        </View>\n      </BottomSheet>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 24,\n    backgroundColor: 'grey',\n  },\n  contentContainer: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  footerContainer: {\n    padding: 12,\n    margin: 12,\n    borderRadius: 12,\n    backgroundColor: '#80f',\n  },\n  footerText: {\n    textAlign: 'center',\n    color: 'white',\n    fontWeight: '800',\n  },\n});\n\nexport default App;\n")))}u.isMDXComponent=!0}}]);