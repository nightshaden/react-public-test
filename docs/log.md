# project log

** 기본 골조: ** 각 구조와 액션에 대한 기록

## File Structure

| Action | File |

## TailwindCSS

- index.css생성 bg/text설정
- 필요한 폰트 추가(index.css)

## 1. Header와 Footer에 대한 배치와 구조 조정(CSS)

## 2. 메인화면(Home) 배치와 구조 조정(CSS)

- bg조정 디테일하게, 창 크기에 맞춰서 사이즈 조절되게
-

## 3. Ticket.tsx 구성

- dayjs를 활용하는게 타이머 제작에 유용
- 반환 값을 배열로 만들어서 쭉 뿌릴 것
- Error: 설정한 D-day는 6월 30일인데 남은 시간이 일치하지 않음(13일 남았다고 뜸)
- dayjs.duration().days()는 0~30까지만 표기되는 것 확인
- dayjs.duration().asDays()는 제한 없는 일 수 표기
- 임시로 <a>를 사용해 페이지 이동 구현

** 폰트 양식 수정 **

- @theme으로 묶어서 정리
- base에 태그 옵션 설정

### 피그마에서 필요한 이미지 다운 + dev mod 받음

- 글로벌 폰트 변경
- 피그마에서 이미지 레이어로 전부 다시 다운로드(png_layer폴더)

## 4. Exhibitor.tsx 구성

- flex flex-col로 구성
- aspect-square / object-contain으로 이미지 구겨짐없이 구성
- 클릭 시 페이지 이동 기능 추가

## 5. MasterClass.tsx 구성

- 각 사진을 먼저 between으로 양사이드로 몰아버리고 마지막에 중앙에 넣을 시간표를 챙기기
