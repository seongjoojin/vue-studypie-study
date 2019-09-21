# vue-studypie-study

[![Greenkeeper badge](https://badges.greenkeeper.io/seongjoojin/vue-studypie-study.svg)](https://greenkeeper.io/)

studypie에서 8주동안 진행되었던 vue study 내용을 정리한 곳입니다.

## computed vs watch

computed는 이미 정의된 계산식에 따라 결과값을 반환할 때 사용되며, watch는 어떤 특정 조건에서 함수를 실행시키기 위한 트리거로서 사용할 수 있다는 의미

## 라이프사이클

### Creation : 컴포넌트 초기화 단계

이 단계는 컴포넌트가 돔에 추가되기 전임

#### beforeCreate

가장 먼저 실행되는 훅

can't use Data(this.title ...), events(vm.$on, vm.$once, vm.$off, vm.$emit)

#### created

data와 events가 활성화되어 접근할 수 있게 됨

템플릿과 가상돔은 마운트 및 렌더링 되지 않은 상태

### Mounting : 돔(DOM) 삽입 단계

초기 렌더링 직전에 컴포넌트에 직접 접근가능

초기 렌더링 직전에 돔을 변경하고자한다면 이 단계를 활용 가능

컴포넌트 초기에 세팅되어야할 데이터 패치는 created 단계 사용

#### beforeMount

템플릿과 렌더함수들이 컴파일 된후 첫 렌더링 일어나기 직전에 실행됨

시용하지 않는 것이 좋음

#### mounted

컴포넌트, 템플릿, 렌더링 된 돔에 접근할 수 있음.

vm.$nextTick 를 사용하면 전체가 렌더링된 상태를 보장할 수 있음.

부모는 mounted훅을 실행하기 전에 자식의 mounted훅이 끝나기를 기다림

### Updating : Diff 및 재 렌더링 단계

디버깅이나 프로파일링 등을 위해 컴포넌트 재 렌더링 시점을 알고 싶을때 사용하면 됨.

#### beforeUpdate

 컴포넌트의 데이터가 변하여 업데이트 사이클이 시작될때 실행
 
 돔이 재 렌더링되고 패치되기 직전에 실행
 
 재 렌더링 전의 새 상태의 데이터를 얻을 수 있고 더 많은 변경이 가능
 
 #### updated
 
 컴포넌트의 데이터가 변하여 재 렌더링이 일어나 후에 실행됨.
 
 돔이 업데이트 완료된 상태이므로 돔 종속적인 연산을 할 수 있음.
 
 vm.$nextTick 를 사용하면 전체가 렌더링된 상태를 보장할 수 있음
  
 ### Destruction : 해체 단계
 
 #### beforeDestroy
 
 해체(뷰 인스턴스 제거)되기 직전에 호출
 
 컴포넌트는 원래 모습과 모든 기능들을 그대로 가지고 있음
 
 이벤트 리스너를 제거하거나 reactive subscription을 제거하고자 한다면 이 훅이 제격
 
 #### destroyed
 
 해체(뷰 인스턴스 제거)된 후에 호출됨
 
 Vue 인스턴스의 모든 디렉티브가 바인딩 해제 되고 모든 이벤트 리스너가 제거되며 모든 하위 Vue 인스턴스도 삭제됨
 
 # vue router - history mode? hash mode?
 
 vue router의 기본이 hash mode -> 주소창에 hash가 들어감
 
 history mode는 우리가 익숙하게 보는 url로 보여줌
 
 # Fake Api 서버와 Postman 소개
 
 - https://reqres.in/
 - https://www.getpostman.com/
 
 ## axios Response Schema
 
 https://github.com/axios/axios#response-schema
 
 ## HTTP 상태 코드
 
 https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C
 
 ## Vue & Axios | 토큰을 활용한 로그인 프로세스
 
 로그인시 토큰 발행 (마이페이지 등 회원정보가 들어가는 부분에 해당 토큰이 들어가야 됨)
 
 토큰 : 짧은 주기로 갱신하여 사용 -> 토큰이 탈취되어도 만료시간이 지나면 무용지물
 
 