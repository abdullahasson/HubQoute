import{r as a,b as d,p as f,j as s,B as r,F as t,X as g,C as b,S as C}from"./index-D6gix3xw.js";import{P as N}from"./page_title-B3HrR6yZ.js";import{B as v}from"./Breadcrumbs-DWZstZP4.js";import{L as B}from"./Link-B4vCZG17.js";const T=({children:n,head:o,className:i,title:c,titleIcon:l,contentNumber:m,CurrentPage:p,PreviousPage:x,PreviousPageIcon:e,searchInput:h})=>{const{setSearshInput:u}=a.useContext(d);a.useEffect(()=>{u(h||!1)},[]);const j=f();return s.jsxs(r,{className:`page ${i}`,children:[s.jsxs(v,{separator:s.jsx(t,{icon:g}),"aria-label":"breadcrumb",children:[s.jsx(b,{className:"current-page",children:p}),s.jsxs(B,{underline:"hover",color:"inherit",onClick:()=>j(-1),className:"previous-page",children:[x,e?s.jsx(t,{icon:e}):null]})]}),s.jsxs(r,{className:"main-title",children:[s.jsxs(C,{className:"title-row",children:[s.jsx(N,{iconTitle:l,numberOfContent:m,children:c}),o]}),n]})]})};export{T as P};