package antify

import "strings"

type Request struct {
	Method string
	Path string
	Query map[string][]string
	Headers map[string]string
	Body string
}

func (r Request) ToString() string {
	strArr := make([]string, 0)

	strArr = append(strArr, "Method: " + r.Method)

	strArr = append(strArr, "Path: " + r.Path)

	strArr = append(strArr, "Body: " + r.Body)

	return strings.Join(strArr, LINE_BREAK)
}

func (r Request) GetQuery(b string) []string {
	return make([]string, 0)
}

func (r Request) GetQueryFirst(b string) string {
	for _, query := range r.GetQuery(b) {
		return query
	}

	return ""
}
