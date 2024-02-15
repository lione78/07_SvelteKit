<script>
    import { onMount } from "svelte";

    function loginWithKakao() {
      Kakao.Auth.authorize({
        redirectUri: 'http://localhost:5173/oauth/kakao/info',
      });
    }
onMount(() => {
    Kakao.init('ee6bb01bafe709d5827cd82f380d2e6a'); // 사용하려는 앱의 JavaScript 키 입력
})
 
</script>

<a id="kakao-login-btn" on:click={loginWithKakao}>     <!--href="javascript:loginWithKakao()"-->
    <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
</a>
<p id="token-result"></p>