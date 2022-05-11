#!/usr/bin/env bash
set -e

docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN ${CI_REGISTRY}

echo "CI_REGISTRY: ${CI_REGISTRY}"
echo "CI_PROJECT_PATH: ${CI_PROJECT_PATH}"
echo "CI_COMMIT_SHA: ${CI_COMMIT_SHA}"
echo "CI_REGISTRY_IMAGE: ${CI_REGISTRY_IMAGE}"

echo "Building image version ${CI_BUILD_REF}"
docker buildx build --load --platform linux/amd64 -f Dockerfile -t ${CI_REGISTRY_IMAGE}/web:${CI_BUILD_REF} ./


echo "Pushing image version ${CI_BUILD_REF}"
docker push ${CI_REGISTRY_IMAGE}/web:${CI_BUILD_REF}

echo "Pushing image version ${CI_BUILD_REF_NAME}"
docker tag ${CI_REGISTRY_IMAGE}/web:${CI_BUILD_REF} ${CI_REGISTRY_IMAGE}/web:${CI_BUILD_REF_NAME}
docker push ${CI_REGISTRY_IMAGE}/web:${CI_BUILD_REF_NAME}

if [ "${CI_BUILD_REF_NAME}" = "master" ]; then
echo "Pushing image version #latest"
docker tag ${CI_REGISTRY_IMAGE}/web:${CI_BUILD_REF_NAME} ${CI_REGISTRY_IMAGE}/web:latest
docker push ${CI_REGISTRY_IMAGE}/web:latest
fi


if [ "${CI_BUILD_REF_NAME}" = "master" ]; then
  CONFIG="${HOME}/.kube/fymproduction/config"
  STAGE="production"
  NAMESPACE="hernas"
fi

echo "Kubernetes context: $(kubectl --kubeconfig $CONFIG config current-context)"

kubectl --kubeconfig ${CONFIG} -n ${NAMESPACE} set image deployment/ah_portfolio nginx=${CI_REGISTRY_IMAGE}/web:${CI_BUILD_REF}
