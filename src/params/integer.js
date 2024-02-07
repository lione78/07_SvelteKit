export function match(params) {
    return /^\d+$/.test(params);
    // regex로 // 닫아 주고 ^ : 시작, $ : 끝, + 1개 이상, * 0개이상
}