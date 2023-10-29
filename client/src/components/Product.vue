<template>
    <div id="product-page" style="background-color: rgb(241, 241, 241);">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="dropdown">
              <a class="nav-link dropdown-toggle fw-bolder" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false" data-bs-auto-close="false">
                Category
              </a>
              <div class="position-relative">
                <ul class="dropdown-menu position-static" data-bs-reference="parent"
                  style="border: 0px; background-color: rgb(241, 241, 241);">
                  <li><a class="dropdown-item fw-lighter" href="#">Rings</a></li>
                  <li><a class="dropdown-item fw-lighter" href="#">Necklace</a></li>
                  <li><a class="dropdown-item fw-lighter" href="#">Earring</a></li>
                  <li><a class="dropdown-item fw-lighter" href="#">Bracelet</a></li>
                  <li><a class="dropdown-item fw-lighter" href="#">Anklet</a></li>
                  <li><a class="dropdown-item fw-lighter" href="#">Glasses</a></li>
                </ul>
              </div>
            </div>
            <hr>
            <div class="dropdown">
              <a class="nav-link dropdown-toggle fw-bolder" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false" data-bs-auto-close="false">
                Size
              </a>
              <div class="position-relative">
                <ul class="dropdown-menu position-static" data-bs-reference="parent"
                  style="border: 0px; background-color: rgb(241, 241, 241);">
                  <li><a class="dropdown-item fw-lighter" href="#">Large</a></li>
                  <li><a class="dropdown-item fw-lighter" href="#">Medium</a></li>
                  <li><a class="dropdown-item fw-lighter" href="#">Small</a></li>
                  <li><a class="dropdown-item fw-lighter" href="#">XL</a></li>
                  <li><a class="dropdown-item fw-lighter" href="#">XXL</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-9">
            <div class="row mb-5 mt-5">
              <div class="col-3">
                <div class="card">
                  <img src="/img/ring-thumbnail.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Nhẫn</h5>
                    <p class="card-text">Đây là nhẫn.</p>
                    <p>2.500.000đ</p>
                    <button type="button" class="btn btn-primary">Add to cart</button>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card">
                  <img src="/img/ring-thumbnail.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Nhẫn</h5>
                    <p class="card-text">Đây là nhẫn.</p>
                    <p>2.500.000đ</p>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card">
                  <img src="/img/ring-thumbnail.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Nhẫn</h5>
                    <p class="card-text">Đây là nhẫn.</p>
                    <p>2.500.000đ</p>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card">
                  <img src="/img/ring-thumbnail.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Nhẫn</h5>
                    <p class="card-text">Đây là nhẫn.</p>
                    <p>2.500.000đ</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <div class="card">
                  <img src="/img/ring-thumbnail.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Nhẫn</h5>
                    <p class="card-text">Đây là nhẫn.</p>
                    <p>2.500.000đ</p>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card">
                  <img src="/img/ring-thumbnail.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Nhẫn</h5>
                    <p class="card-text">Đây là nhẫn.</p>
                    <p>2.500.000đ</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row my-5">
              <div class="col-12" style="display: flex; justify-content: center;">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>