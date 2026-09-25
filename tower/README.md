# 탑등반물 이미지 경로

이 폴더는 `pooha0129/today-promise`의 GitHub Pages에서 이미지 파일을 직접 제공하기 위한 별도 공간입니다. 기존 플래너 파일과 경로는 변경하지 않습니다.

| 폴더 | 용도 | 파일명 예시 |
| --- | --- | --- |
| `MAP` | 장소와 층 배경 | `1.webp`, `floor41_safezone.webp` |
| `CHAR` | 인물과 표정 | `serin_neutral.webp`, `serin_smile.webp` |
| `MON` | 몬스터 | `karg.webp` |
| `CG` | 사건·연출 장면 | `gate_open.webp` |

GitHub에 이 폴더를 업로드한 뒤 사용할 공개 기본 주소: `https://pooha0129.github.io/today-promise/tower/`

예: `https://pooha0129.github.io/today-promise/tower/MAP/1.webp`

## 업로드 규칙

1. 이미지 파일을 해당 폴더에 올립니다. 캐챗 프롬프트에서 쓸 파일명은 영문 소문자, 숫자, 밑줄만 사용하고 확장자는 `.webp`로 통일합니다.
2. 경로와 대소문자를 정확히 일치시킵니다. `MAP`, `CHAR`, `MON`, `CG`는 대문자입니다.
3. 브라우저에서 공개 URL을 열었을 때 이미지 자체가 보이는지 확인합니다. GitHub의 `blob/` 페이지 주소는 사용하지 않습니다.
4. 실제 업로드하고 확인한 파일만 캐챗의 허용 목록에 추가합니다. 템플릿은 경로를 조합할 뿐, 파일을 자동 생성하지 않습니다.

현재 `MAP/1.webp`는 연결 테스트용 그림입니다. GitHub에 업로드하고 공개 주소가 열리는 것을 확인한 뒤 테스트용으로 사용하세요. 실제 세계관 이미지가 준비되면 별도 이름으로 추가하거나 이 파일을 교체할 수 있습니다.

## 캐챗 프롬프트에 넣을 규칙

```text
# 외부 이미지
기본 URL: https://pooha0129.github.io/today-promise/tower/
장소: {기본 URL}MAP/{장소ID}.webp
인물: {기본 URL}CHAR/{인물ID}_{표정ID}.webp
몬스터: {기본 URL}MON/{몬스터ID}.webp
이벤트 CG: {기본 URL}CG/{이벤트ID}.webp

이미지를 표시할 때는 완성된 실제 URL로 Markdown 한 줄을 출력한다.
형식: ![이미지 설명](https://pooha0129.github.io/today-promise/tower/종류/파일명.webp)
중괄호나 역슬래시를 출력하지 않는다.
실제로 업로드되어 허용 목록에 적힌 ID 조합만 사용한다.
목록에 없는 이미지가 필요한 장면은 이미지 없이 서술한다.
같은 장면에서 같은 이미지를 매 응답마다 반복하지 않는다.

업로드 후 URL이 열리는지 확인할 이미지:
MAP/1.webp = 호스팅 연결 테스트용 (실제 탑 장면에는 사용하지 않음)
```

테스트 출력: `![연결 테스트](https://pooha0129.github.io/today-promise/tower/MAP/1.webp)`

