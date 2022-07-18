interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  return new Promise();
}

// Product 의 일부만 가져온 인터페이스
// 중복이 발생한다.
interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

// 상세정보를 조회했을 때
// 하나의 프로덕트 정보를 뿌리는 함수
function displayProductDetail(
  // pick 은 Pick<가져올 전체 타입, 사용할 타입> 으로 사용한다.
  shoppingItem: Pick<Product, 'id' | 'name' | 'price'>
) {
  //
}

function omitProductDetail(shoppingItem: Omit<Product, 'id' | 'name'>) {}

// 특정 상품 정보를 갱신하는 함수
// Product 내 어떤 요소의 타입을 변경할 지 모르기 때문에 어떤 타입도 다 받을 수 있도록 해야한다.
// 그러기 위해서 아래와 같이 한번 더 옵셔널한 타입을 정의하면 중복이 생긴다.

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }
// Partial 은 모든 타입을 optional 하게 바꾼다고 보면 된다.
// 위 중복을 해겷기 위해 Partial 를 사용하면 동일한 효과를 얻을 수 있다.
function updateProductItem(productItem: Partial<Product>) {}

// 4. 유틸리티 타입 구현 - Partial

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

//  #1
type userProfileudpate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
};

// #2

type userProfileUpdate2 = {
  // 아래와 같이 접근하는 방식을 mapped 타입이라고 한다.
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
};

// #3

type userProfileUpdate3 = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// 최종 partial

type UserProfileUpdateFinal<T> = {
  [P in keyof T]?: T[P];
};
