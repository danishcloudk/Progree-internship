## 1. Infrastructure as Code (Terraform)
Located in the `terraform/` directory.

- **`main.tf`**: Provisions an isolated Virtual Private Cloud (VPC) with public and private subnets, and an Elastic Kubernetes Service (EKS) cluster on AWS.
- **`variables.tf`**: Contains variable definitions.

### How to Apply:
```bash
cd terraform
terraform init
terraform plan
terraform apply
```
*(Ensure you have AWS credentials configured locally).*

## 2. Kubernetes Orchestration
Located in the `kubernetes/` directory.

- **`deployment.yaml`**: Deploys the `progree-app` container, maps environment variables securely, and defines resource limits.
- **`service.yaml`**: Exposes the application within the cluster.
- **`pvc.yaml`**: Provisions a Persistent Volume Claim (1Gi) mapped to the application for data persistence.
- **`ingress.yaml`**: Configures an Ingress controller endpoint routing traffic to the Service.
- **`hpa.yaml`**: Configures a Horizontal Pod Autoscaler to dynamically scale replicas (2 to 10) based on CPU utilization crossing 50%.

### How to Deploy:
```bash
cd kubernetes
kubectl apply -f pvc.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml
kubectl apply -f hpa.yaml
```
*(Ensure `kubectl` is authenticated against your provisioned cluster).*
