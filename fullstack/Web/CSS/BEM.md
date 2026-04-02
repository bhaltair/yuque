# BEM

```html

<ul class="application-list">
  <li class="application-list__item">
    <a class="application-list__link" href="/yuyan/yuyanAssets">
      <img class="application-list__img" src="https://gw.alipayobjects.com/zos/basement_prod/9a7a9c64-01ee-45ca-a615-6063a24f70a9.svg" />
      <div class="application-list__content">
        <h4 class="application-list__title">yuyanAssets</h4>
        <span class="application-list__description">雨燕前端应用</span>
      </div>
    </a>
  </li>
</ul>
```

```css
.application-list {
  list-style: none;
  
  &__item {
    background: #fff;
  }
  
  &__link {
    display: block;
    padding: 18px 22px;
  }
 
  &__img {
    display: block;
    width: 38px;
    height: 38px;
    float: left;
  }
  
  &__content {
    display: inline-block;
  }
  
  &__title {
    color: #314659;
    font-weight: 600;
    margin: 0;
  }

  &__description {
    color: #697b8c;
    font-size: 12px;
  }
  
}
```



> 更新: 2023-07-27 14:37:17  
> 原文: <https://www.yuque.com/u3641/dxlfpu/wqvifb>